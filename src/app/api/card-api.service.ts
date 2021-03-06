/**
 * Scrum Board API
 * This is a wonderful API to manipulate a wonderful Scrum Board
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { Card } from '../models/card';


@Injectable()
export class CardApiService {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();

    constructor(protected httpClient: HttpClient) {
    }



    /**
     * create a new card
     *
     * @param body the card to be created
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createCard(body: Card, observe?: 'body', reportProgress?: boolean): Observable<Card>;
    public createCard(body: Card, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Card>>;
    public createCard(body: Card, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Card>>;
    public createCard(body: Card, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createCard.');
        }

        let headers = this.defaultHeaders;


        headers = headers.set('Content-Type', 'application/json');


        return this.httpClient.request<Card>('post',`${this.basePath}/cards`,
            {
                body: body,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * get a card
     *
     * @param cardId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCard(cardId: string, observe?: 'body', reportProgress?: boolean): Observable<Card>;
    public getCard(cardId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Card>>;
    public getCard(cardId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Card>>;
    public getCard(cardId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (cardId === null || cardId === undefined) {
            throw new Error('Required parameter cardId was null or undefined when calling getCard.');
        }

        let headers = this.defaultHeaders;

        headers = headers.set('Accept',  'application/json');

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Card>('get',`${this.basePath}/cards/${encodeURIComponent(String(cardId))}`,
            {
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * retrieve all cards or cards by state if the optional parameter is given
     *
     * @param state
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCards(state?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Card>>;
    public getCards(state?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Card>>>;
    public getCards(state?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Card>>>;
    public getCards(state?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams();
        if (state !== undefined && state !== null) {
            queryParameters = queryParameters.set('state', <any>state);
        }

        let headers = this.defaultHeaders;


        headers = headers.set('Accept', 'application/json');


        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Card>>('get',`${this.basePath}/cards`,
            {
                params: queryParameters,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * modifies a card
     *
     * @param body the card to be updated
     * @param cardId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateCard(body: Card, cardId: string, observe?: 'body', reportProgress?: boolean): Observable<Card>;
    public updateCard(body: Card, cardId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Card>>;
    public updateCard(body: Card, cardId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Card>>;
    public updateCard(body: Card, cardId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateCard.');
        }

        if (cardId === null || cardId === undefined) {
            throw new Error('Required parameter cardId was null or undefined when calling updateCard.');
        }

        let headers = this.defaultHeaders;


        headers = headers.set('Accept',  'application/json');


        headers = headers.set('Content-Type',  'application/json');


        return this.httpClient.request<Card>('put',`${this.basePath}/cards/${encodeURIComponent(String(cardId))}`,
            {
                body: body,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
