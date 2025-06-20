import type { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";

interface CardProps  {
  children: ReactNode;
}

function CardButtonCustom(props: CardProps) {

  const { children } = props;

  return (
    <div className="card"
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
      <h5 className="card-title" style={{color: 'red'}}>{title}</h5>
      <p className="card-text">{text}</p>
    </Fragment>
  )
}

export default CardButtonCustom;
