//
//  RCTConvert+MapKit.h
//  MyApp
//
//  Created by plum on 2018/12/19.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTConvert+CoreLocation.h>
#import <MapKit/MapKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface RCTConvert (MapKit)

+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;
+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;


@end

NS_ASSUME_NONNULL_END
