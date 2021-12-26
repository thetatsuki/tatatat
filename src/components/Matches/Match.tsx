import React from 'react';
import './Match.styles.scss';
import {IMatch} from './types';

interface InfoMatchCardProps {
    data: IMatch;
}

const MatchCard: React.FC<InfoMatchCardProps> = React.memo(({data}) => {
    console.log('Я РЕЛОАД')
    return (
        <div className="match">
            <div className="match__team">
                <h1 className="team__name">
                    {data.teamHome.shortName}
                </h1>
                <img
                    src={`https://footballista.ru/api/img/logos/${data.teamHome.logo}-middle.png?logoId=${data.teamHome.logoId}`}
                    alt={`${data.teamHome.logo} logo`}
                    className="team__logo"
                />
                <p className="team__where">
                    Дом
                </p>
            </div>
            <div className="match__info">
                <h1 className="info__score">
                    {data.scoreFtHome} - {data.scoreFtAway}
                </h1>
                <h4 className="info__date">
                    25.04.2021
                </h4>
                <p className="info__stadium">
                    {data.stadium?.name}
                </p>
                <p className="info__tour">
                    тур - {data.tourNumber}
                </p>
            </div>
            <div className="match__team">
                <h1 className="team__name">
                    {data.teamAway.shortName}
                </h1>
                <img
                    src={`https://footballista.ru/api/img/logos/${data.teamAway.logo}-middle.png?logoId=${data.teamAway.logoId}`}
                    alt={`${data.teamAway.logo} logo`}
                    className="team__logo"
                />
                <p className="team__where">
                    Гости
                </p>
            </div>
        </div>
    );
});

export default MatchCard;
