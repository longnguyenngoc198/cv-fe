import { FILEUPLOAD } from './axios';

export default function uploadFile(file: FormData) {
  return FILEUPLOAD.post('url', file);
}
