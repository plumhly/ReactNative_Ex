//
//  PLMapManager.m
//  MyApp
//
//  Created by plum on 2018/12/19.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "PLMapManager.h"
#import <MapKit/MapKit.h>
#import "RCTConvert+MapKit.h"
#import "PLMapView.h"

@interface PLMapManager ()<MKMapViewDelegate>

@end

@implementation PLMapManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)

RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView) {
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

- (UIView *)view {
  PLMapView *mapView = [PLMapView new];
  mapView.delegate = self;
  return mapView;
}

#pragma mark - MKMapViewDelegate
- (void)mapView:(PLMapView *)mapView regionDidChangeAnimated:(BOOL)animated {
  if (!mapView.onRegionChange) {
    return;
  }
  MKCoordinateRegion region = mapView.region;
  mapView.onRegionChange(@{
                           @"region": @{
                               @"latitude": @(region.center.latitude),
                               @"longitude": @(region.center.longitude),
                               @"latitudeDelta": @(region.span.latitudeDelta),
                               @"longitudeDelta": @(region.span.longitudeDelta),
                               }
                           });
}

@end
