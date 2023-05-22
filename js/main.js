import {indicateError} from './errors.js';
import {showPhoto} from './miniatures.js';
import {renderUploadForm} from './form-render.js';
import {getData} from './api.js';

getData((photos) => showPhoto(photos),
  () => indicateError);
renderUploadForm();
