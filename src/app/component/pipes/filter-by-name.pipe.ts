import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(repositories: Array<any>, query: string): Array<any> {

    if (!repositories){
      return [];
    }
    console.log(query, repositories)
    return repositories
            .filter((repository) => repository.name.includes(query));
  }

}
