import React from "react";

const Search = ({ params, onParamsChange }) => {
  return (
    <form className="pt-2 flex items-center relative -mx-4 text-center text-gray-600 py-5">
      <input
        className="border-2 border-gray-300 bg-white w-1/3 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="text"
        name="description"
        value={params.description}
        onChange={onParamsChange}
        placeholder="Search by description"
        autoFocus
      />
      <span
        className="relative mt-5 mr-4"
        style={{ right: "1.5rem", bottom: "0.5rem" }}
      >
        <svg
          className="text-gray-600 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style={{ enableBackground: "new 0 0 56.966 56.966" }}
          xmlSpace="preserve"
          width="72px"
          height="72px"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </span>

      <input
        className="border-2 border-gray-300 bg-white w-1/3 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="text"
        name="location"
        value={params.location}
        onChange={onParamsChange}
        placeholder="Search by location"
      />
      <span
        className="relative mt-5 mr-4"
        style={{ right: "1.5rem", bottom: "0.5rem" }}
      >
        <svg
          className="text-gray-600 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style={{ enableBackground: "new 0 0 56.966 56.966" }}
          xmlSpace="preserve"
          width="72px"
          height="72px"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </span>
      <input
        type="checkbox"
        className="form-radio h-5 w-5 text-gray-600"
        name="full_time"
        value={params.full_time}
        onChange={onParamsChange}
      />
      <span className="ml-2 text-gray-700">Full Time only</span>
    </form>
  );
};

export default Search;
