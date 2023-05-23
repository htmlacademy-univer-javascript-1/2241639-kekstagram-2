import {indicateError} from './errors.js';
import {renderUploadForm} from './form-render.js';
import {getData} from './api.js';
import {showFilters} from './img-filters.js';
import './load-photo.js';

getData((photos) => showFilters(photos),
  () => indicateError);
renderUploadForm();
