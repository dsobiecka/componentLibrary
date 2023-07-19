import { Link } from "react-router-dom";

type BreadcrumbItem = {
  text: string;
  path: string;
  className?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;

          return isLastItem ? (
            <li
              key={item.path}
              className="breadcrumb-item active"
              aria-current="page"
            >
              {item.text}
            </li>
          ) : (
            <li key={item.path} className="breadcrumb-item">
              <Link to={item.path}>{item.text}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
