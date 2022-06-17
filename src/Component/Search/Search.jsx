import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search_chacter } from '../../redux/action';
function Search({input}) {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const handleSubmit = (e)=>{
      e.preventDefault();
      dispatch(search_chacter(search, input))
      setSearch('');
    }
    const handleChange = (e)=>{
      e.preventDefault();
      setSearch(e.target.value);
    }
  return (
    <div>
<label htmlFor="Search"></label>
<form className="d-flex" id='Search' onSubmit={e=>handleSubmit(e)}>
        <input className="form-control me-2" value={search} type="search" placeholder="Search for Filter" onChange={e=>handleChange(e)}/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search