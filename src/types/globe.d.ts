declare module "globe.gl" {
  export interface GlobeInstance {
    (element: HTMLElement): GlobeInstance;
    globeImageUrl(url: string): GlobeInstance;
    bumpImageUrl(url: string): GlobeInstance;
    backgroundImageUrl(url: string): GlobeInstance;
    arcsData(data: any[]): GlobeInstance;
    arcColor(color: string | ((d: any) => string)): GlobeInstance;
    arcDashLength(length: number): GlobeInstance;
    arcDashGap(gap: number): GlobeInstance;
    arcDashAnimateTime(time: number): GlobeInstance;
    arcStroke(stroke: number): GlobeInstance;
    arcsTransitionDuration(duration: number): GlobeInstance;
    atmosphereColor(color: string): GlobeInstance;
    atmosphereAltitude(altitude: number): GlobeInstance;
    width(width: number): GlobeInstance;
    height(height: number): GlobeInstance;
    pointOfView(pov: {
      lat: number;
      lng: number;
      altitude: number;
    }): GlobeInstance;
    controls(): any;
    _destructor?(): void;
  }

  const Globe: () => GlobeInstance;
  export default Globe;
}
