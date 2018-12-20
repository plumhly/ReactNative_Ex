
//
//  RCTConvert+MapKit.m
//  MyApp
//
//  Created by plum on 2018/12/19.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "RCTConvert+MapKit.h"

@implementation RCTConvert (MapKit)


+ (MKCoordinateRegion)MKCoordinateRegion:(id)json {
  return (MKCoordinateRegion){
    [self CLLocationCoordinate2D:json],
    [self MKCoordinateSpan:json]
  };
}


+ (MKCoordinateSpan)MKCoordinateSpan:(id)json {
  json = [self NSDictionary:json];
  return (MKCoordinateSpan){
    [self CLLocationDegrees:json[@"MKCoordinateSpan"]],
    [self CLLocationDegrees:json[@"longitudeDelta"]]
  };
}
@end
