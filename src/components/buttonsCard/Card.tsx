import type { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";

interface CardProps  {
  children: ReactNode;
}

function Card(props: CardProps) {

  const { children } = props;

  return (
    <div className=""
      style={{
        width: '400px',
        margin: '20px'
      }}
    >
      <div className="card-body" style={{backgroundColor: 'aquamarine'}}>
        { children }
      </div>
    </div>
  );

}

// ============================================================
interface CardBodyProps {
  title: string;
  text?: string;
}

export function CardTitle(props: CardBodyProps) {
  // tambien podemos usar <></> en ves de <Fragment></Fragment> asi no importamos
  // import { Fragment } from "react/jsx-runtime";

  const {title, text} = props;
  return (
    <Fragment>
      <h5 className="" style={{color: 'red'}}>{title}</h5>
      <p className="">{text}</p>
    </Fragment>
  )
}

export default Card;
