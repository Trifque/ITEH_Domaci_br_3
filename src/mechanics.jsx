import React from 'react';
import SingleMechanic from './singleMechanic';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

const Mechanics = ({mechanics, onAdd, onRemove}) => {


  const [currentPage, setCurrentPage] = useState(0);
  const mechanicsPerPage = 3; 

  const offset = currentPage * mechanicsPerPage;
  const currentPageMechanics = mechanics.slice(offset, offset + mechanicsPerPage);

  const pageCount = Math.ceil(mechanics.length / mechanicsPerPage);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <div>

      <div className='everyMechanic'>
        {currentPageMechanics.map((mechanic) => (
          <SingleMechanic key={mechanic.id} mechanic={mechanic} onAdd={onAdd} onRemove={onRemove}/>
        ))}
      </div>

      <ReactPaginate 
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />

    </div>
  )
}

export default Mechanics
