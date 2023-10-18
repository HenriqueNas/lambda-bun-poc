interface IProfile {
  fullname: String;
  nickname: String;
  github: String;
  profilePicture: String;
  birthYear: Number;
  techs: Array<String>;
}

export class Profile {
  constructor(profile: IProfile) {
    this.fullname = profile.fullname;
    this.nickname = profile.nickname;
    this.github = profile.github;
    this.profilePicture = profile.profilePicture;
    this.age = new Date().getFullYear() - Number(profile.birthYear);
    this.techs = profile.techs;
  }

  public fullname: String;
  public nickname: String;
  public github: String;
  public profilePicture: String;
  public age: Number;
  public techs: Array<String>;
}
