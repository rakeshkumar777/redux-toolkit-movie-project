import React,{useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useParams,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { fetchAsyncMovieDetail,getAllMovieDetails } from '../../app/movieSlice'





const MovieDetail = () => {
  const navigate=useNavigate();
  const data=useSelector(getAllMovieDetails)
  console.log("detailData",data)
const {imdbID}=useParams();
const dispatch = useDispatch();
useEffect(()=>{
  fetchAsyncMovieDetail(imdbID)
},[dispatch,imdbID])

  return (
    <div>
      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton  >
          <Modal.Title>{data.Title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{navigate(-1);}}>Close</Button>
          <Button variant="danger" onClick={()=>{navigate('/Hello');}}>Watch</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
 
    </div>
  );
}

export default MovieDetail;
