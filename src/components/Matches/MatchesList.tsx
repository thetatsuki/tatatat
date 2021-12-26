import React from 'react';
import MatchCard from './Match';
import {IMatchesProps} from './types';


const MatchesList: React.FC<Pick<IMatchesProps, 'matches'>> = ({matches}) => {
    return <>
        {matches.map((match, i) => (
            <MatchCard data={match} key={i}/>
        ))}
    </>
};

export default MatchesList;
