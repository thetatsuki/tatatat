import axios from 'axios';
import {LoadMatchesDto} from './types';


const Axios = axios.create({
    baseURL: 'https://footballista.ru/api/'
})


export const MatchesApi = {
    async loadMatches({limit = 10, offset = 0}: LoadMatchesDto) {
        const searchParams = new URLSearchParams({
            limit: limit.toString(),
            offset: offset.toString(),
        });
        const {data: {items}} = await Axios.get(`/seasons/5099/calendar_paginated?${searchParams.toString()}`);
        return items;
    }
}
