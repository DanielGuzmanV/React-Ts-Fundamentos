import { Fragment } from "react/jsx-runtime";


function Card() {

  return (
    <div className="card"
      style={{
        width: '400px',
        margin: '20px'
      }}
    >
      <div className="card-body" style={{backgroundColor: 'aquamarine'}}>
      
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
      <h5 className="card-title" style={{color: 'red'}}>{title}</h5>
      <p className="card-text">{text}</p>
    </Fragment>
  )
}

export default Card;
