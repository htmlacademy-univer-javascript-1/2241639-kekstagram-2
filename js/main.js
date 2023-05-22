import {indicateError} from './errors.js';
//import {showPhoto} from './miniatures.js';
import {renderUploadForm} from './form-render.js';
import {getData} from './api.js';
import {showFilters} from './img-filters.js';

getData((photos) => showFilters(photos),
  () => indicateError);
renderUploadForm();
