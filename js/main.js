import {indicateError} from './errors.js';
import {showPhoto} from './miniatures.js';
import {renderUploadForm} from './form-render.js';
import {inputData} from './api.js';

inputData((photos) => showPhoto(photos),
  () => indicateError);
renderUploadForm();
