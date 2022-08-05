import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export interface IconConfig {
  name: string;
  path: string;
}

const icons: IconConfig[] = [
  {
    name: 'appEmptyHeart',
    path: 'assets/images/icons/empty-heart.svg',
  },
  {
    name: 'appHeart',
    path: 'assets/images/icons/full-heart.svg',
  },
  {
    name: 'appMessage',
    path: 'assets/images/icons/message.svg',
  },
  {
    name: 'appLink',
    path: 'assets/images/icons/link.svg',
  },
];

@NgModule({
  imports: [MatIconModule],
  exports: [MatIconModule]
})
export class IconsModule {
  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer
  ) {
    icons.forEach((icon) => this.add(icon));
  }

  private add(config: IconConfig): void {
    this.matIconRegistry.addSvgIcon(
      config.name,
      this.domSanitizer.bypassSecurityTrustResourceUrl(config.path)
    );
  }
}
