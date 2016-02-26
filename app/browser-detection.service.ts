import {Injectable} from 'angular2/core';

@Injectable()
export class BrowserDetectionService {
    isMobile(): boolean {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent);
    }
    isMobileMessage = 'WebGL is not supported on your platform/browser.';
}
