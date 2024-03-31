import React from "react";
import PuzzleLink from "./PuzzleLink";
import {routes} from './RotuingData'

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mt-4">40 React Puzzles</h1>
      <div className="mt-10">
        {routes.map((puzzle) => {
          return <PuzzleLink key={puzzle.id} id={puzzle.id} slug={puzzle.slug}/>
        })
      }
      </div>
    </div>
  );
};

export default Home;
