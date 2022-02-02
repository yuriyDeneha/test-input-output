import { FilterByNamePipe } from './../pipes/filter-by-name.pipe';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RepositoriesService } from '../repositories.service';
import { debounceTime, filter, first, map } from 'rxjs/operators';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  repositories: Array<any>;
  filterRepositories: Array<any>;

  searchForm = this.formbuilder.group({
    query: ['', Validators.required]
  })

  constructor(
    private repositoriesService: RepositoriesService,
    private filterByNamePipe: FilterByNamePipe,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getRepositories();
    this.subscribeOnSearchUpdates();
  }

  private getRepositories(): void {
    this.repositoriesService.get()
      .subscribe((repositories: any) => {
        console.log(repositories);
        this.repositories = repositories;
        this.filterRepositoriesByName();
      })
  }

  private subscribeOnSearchUpdates() {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(100),
        // first()
        map((formValues) => formValues.query),
        filter((query) => query.length > 0),
        map((query: string) => query.toLocaleLowerCase()),
      )
      .subscribe((query: string) => {
        this.filterRepositoriesByName(query);
      })

  }

  private filterRepositoriesByName(query: string = '') {
    this.filterRepositories = this.filterByNamePipe.transform(this.repositories, query);
  }
}
