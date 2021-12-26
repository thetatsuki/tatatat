import React from 'react';
import Matches from './Matches';
import {MatchesApi} from '../../api/Axios';
import {IMatch} from './types';


const MatchesHOC = () => {
    const [page, setPage] = React.useState<number>(0);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [events, setEvents] = React.useState<IMatch[]>([]);


    const changePage = () => {
        setPage((prev) => prev + 1)
    }

    const loadMatches = async () => {
        try {
            const data = await MatchesApi.loadMatches({offset: page});
            if (events) {
                setEvents(() => events.concat(data));
            } else {
                setEvents(data);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        setLoading(true);
        loadMatches();
    }, [page])


    return <Matches matches={events} loading={loading} changePage={changePage}/>
};

export default MatchesHOC;
