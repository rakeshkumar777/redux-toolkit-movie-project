import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './MovieCard.css'


const MovieCard = (props) => {
  const { data } = props
  console.log("props", data)

  return (

    <>
      <div className='container'>
        <div className="row text-center">
          <div className>
            <Link style={{ textDecoration: "none" }} to=''>

              <Card className='col-md-4' >
                <Card.Img  variant="top" src={data.Poster} />
                <Card.Body >
                  <Card.Title  style={{ color: "black" }}>{data.Title}</Card.Title>
                  <Card.Title style={{ color: "black" }}><i>{data.Year}</i></Card.Title>

                </Card.Body>
              </Card>
            </Link>
          </div>


        </div>
      </div>
    </>
  );
}

export default MovieCard;
