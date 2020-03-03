import ErrorRepository from './ErrorRepository';

const myErrorsRepo = new ErrorRepository();

myErrorsRepo.addError(404, 'Not found');
myErrorsRepo.addError(204, 'No content');

console.log(myErrorsRepo.translate(404));
console.log(myErrorsRepo.translate(204));
console.log(myErrorsRepo.translate(607));
