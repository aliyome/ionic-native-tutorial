import { Component } from '@angular/core';
import { AdOptions, AdSize, AdPosition } from '@rdlabo/capacitor-admob';
import { Plugins } from '@capacitor/core';
import { Badge } from '@ionic-native/badge/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  isAdsense = false;
  constructor(private readonly badge: Badge) {}

  upBadge() {
    this.badge.increase(1);
  }

  clearBadge() {
    this.badge.clear();
  }

  displayAdMob() {
    const options: AdOptions = {
      adId: 'ca-app-pub-2426592601215652~5726406535',
      adSize: AdSize.BANNER,
      position: AdPosition.BOTTOM_CENTER,
      margin: '60',
    };
    Plugins.AdMob.showBanner(options).then(
      success => {
        this.isAdsense = true;
      },
      error => {
        this.isAdsense = false;
      },
    );
  }

  hideAdMob() {
    Plugins.AdMob.hideBanner().then(success => {
      this.isAdsense = false;
    });
  }
}
