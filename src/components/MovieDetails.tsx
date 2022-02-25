import React from 'react';
import { Text, View } from 'react-native';
import currencyFormater from 'currency-formatter';

import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="star-outline" color="grey" size={16} />

          <Text> {movieFull.vote_average} </Text>
          <Text style={{ marginLeft: 5 }}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        {/* Historia */}
        <Text style={{ fontSize: 22, marginTop: 10, fontWeight: 'bold' }}>
          Historia
        </Text>
        <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>

        {/* presupuesto */}
        <Text style={{ fontSize: 22, marginTop: 10, fontWeight: 'bold' }}>
          Presupuesto
        </Text>
        <Text style={{ fontSize: 18 }}>{ currencyFormater.format(movieFull.budget,{code: 'USD'})}</Text>
      </View>
      {/* casting */}
      <View style={{marginTop: 10, marginHorizontal:20, marginBottom:100}}>
      <Text style={{ fontSize: 22, marginTop: 10, fontWeight: 'bold' }}>
          Actores
        </Text>
        
        <FlatList 
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <CastItem  actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop:10 }}
        />
      </View>
    </>
  );
};
