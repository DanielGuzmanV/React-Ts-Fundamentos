import type { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";

interface CardProps  {
  children: ReactNode;
}

function CardList(props: CardProps) {

  const { children } = props;

  return (
    <div className="card"
      style={{
        width: '400px',
        margin: '20px',
        borderRadius: '20px',
        border: '2px solid black'
      }}
    >
      <div className="card-body" style={{backgroundColor: 'aquamarine', borderRadius: '20px'}}>
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

export function CardBody(props: CardBodyProps) {
  // tambien podemos usar <></> en ves de <Fragment></Fragment> asi no importamos
  // import { Fragment } from "react/jsx-runtime";

  const {title, text} = props;
  return (
    <Fragment>
      <div style={{border: '2px solid black', borderRadius: '10px', padding: '5px', margin: '10px'}}>
        <h5 className="card-title" style={{color: 'red'}}><b>{title}</b></h5>
        <p className="card-text">{text}</p>
      </div>
    </Fragment>
  )
}

export default CardList;
