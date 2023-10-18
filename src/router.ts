import { Profile } from "./entities/profile";
import { Techs } from "./entities/techs";
import { NotFoundError } from "./errors";

export const routeHandler = (url: URL) => {
  const pathname = url.pathname;

  const route = Object.values(Routes).find((r) => r === pathname);

  switch (route) {
    case Routes.index:
      return {
        routes: Object.values(Routes),
      };
    case Routes.about:
      return henrique;
    case Routes.techs:
      return Techs;
    default:
      throw new PathNotFoundError(pathname);
  }
};

export enum Routes {
  index = "/",
  about = "/about",
  notFound = "/404",
  techs = "/techs",
}

const henrique = new Profile({
  fullname: "Henrique Elias Nascimento",
  nickname: "HenriqueNas",
  github: "https://github.com/henriquenas",
  profilePicture: "https://github.com/henriquenas.png",
  birthYear: 1997,
  techs: [
    Techs.Flutter,
    Techs.Dart,
    Techs.TypeScript,
    Techs.JavaScript,
    Techs.Node,
    Techs.React,
    Techs.ReactNative,
    Techs.Next,
    Techs.Nest,
    Techs.Docker,
    Techs.Bun,
    Techs.Git,
    Techs.GitHub,
    Techs.PostgreSQL,
    Techs.SQLite,
  ],
});

class PathNotFoundError extends NotFoundError {
  constructor(path: String) {
    super();
    super.message = `Path \'${path}\' not found`;
  }
}
