export class Student {
  id: string;
  name: string;
  aboutMe: string;
  age: number;
  favouriteColor: string;
  birthday: Date;
  gender: Gender;

  constructor({ id, name, aboutMe, age, favouriteColor, birthday, gender }: Partial<Student> = {}) {
    this.id = id || Student.generateId();
    this.name = name || 'Unknown name';
    this.aboutMe = aboutMe || 'Some words about me';
    this.age = age || 16;
    this.favouriteColor = favouriteColor || 'red';
    this.birthday = birthday || new Date();
    this.gender = gender || Gender.PreferNotToSay;
  }

  static generateId() {
    return (Math.random() * 100).toString();
  }
}

export enum Gender {
  Female = 'Female',
  Make = 'Male',
  PreferNotToSay = 'PreferNotToSay',
}
