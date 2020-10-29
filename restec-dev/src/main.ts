import { ResteC, StatusCode } from '@reste/c';

Object.keys(StatusCode).map((key: string) => {
    // @ts-ignore
    const status = StatusCode[key];
    ResteC.message(status, `Hello Reste!`);
});

const sampleResponse = ResteC.response(StatusCode._200, 'Sample message', {sample: 'sample data', type: 'objects'});

ResteC.message(StatusCode.SUCCESS, 'Sample response', sampleResponse);

ResteC.message(StatusCode.SUCCESS, 'Now with raw option');

ResteC.setOptions({raw: true});

ResteC.message(StatusCode.SUCCESS, 'This is a raw message.');
