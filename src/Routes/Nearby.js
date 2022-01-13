import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import '../css/Nearby.css';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';

const GET_LATLNG = gql`
  {
    escapeCafes {
      id
      name
      location_xy
    }
  }
`;

function NaverMapAPI() {
  const navermaps = window.naver.maps;
  const { data } = useQuery(GET_LATLNG);

  return (
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
      style={{
        width: '100%',
        height: '85vh'
      }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }}
      defaultZoom={13}
    >
      {data?.escapeCafes.map(escapeCafe => {
        return (
          <Marker
            key={escapeCafe?.id}
            position={
              new navermaps.LatLng(
                escapeCafe?.location_xy[0],
                escapeCafe?.location_xy[1]
              )
            }
            animation={2}
            onClick={() => {
              alert('여기는 ' + escapeCafe?.name + '입니다.');
            }}
          />
        );
      })}
    </NaverMap>
  );
}

function Nearby() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={'2554u7pte9'}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapAPI />
    </RenderAfterNavermapsLoaded>
  );
}

export default Nearby;
