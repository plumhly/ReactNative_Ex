//
//  PLMapView.h
//  MyApp
//
//  Created by plum on 2018/12/19.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>
#import <React/RCTComponent.h>

NS_ASSUME_NONNULL_BEGIN

@interface PLMapView : MKMapView

@property (nonatomic, strong) RCTBubblingEventBlock onRegionChange;

@end

NS_ASSUME_NONNULL_END
