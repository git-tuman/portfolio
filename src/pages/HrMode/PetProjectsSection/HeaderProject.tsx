import type { Project } from "../../../shared/types";
import Link from "./Link";

const HeaderProject = ({ item }: { item: Project }) => {
  return (
    <div className="header-project">
      <h3>
        <Link link={item.deploy.link} name={item.name} />
      </h3>

      <span className="links-project">
        (<Link link={item.deploy.link} name={item.deploy.name} />,{" "}
        <Link link={item.repo.link} name={item.repo.name} />)
      </span>
    </div>
  );
};

export default HeaderProject;
