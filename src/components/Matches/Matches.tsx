import React from 'react';
import Loader from '../Loader/Index';
import MatchesList from './MatchesList';
import {IMatchesProps} from './types';

import './Match.styles.scss';

const Matches: React.FC<IMatchesProps> = ({matches, loading, changePage}) => {
        return (
            <>
                <h1 className="matches__title">Все матчи</h1>
                <div className="matches">
                    {matches && <MatchesList matches={matches}/>}
                </div>
                {loading
                    ? <Loader/>
                    : <button className="button__load" onClick={changePage}>
                        еще матчи
                    </button>
                }
            </>
        );
    }
;

export default Matches;
