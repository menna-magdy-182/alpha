import {
  Article,
  Category,
  Exercise as ExerciseItem,
  Header,
  SearchInput,
} from "@/components";
import { CATEGORIES, EXERCISES } from "@/constants/data";
import { Exercise } from "@/models/Exercise";
import Colors from "@/theme/colors";
import Sizes from "@/theme/sizes";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Plan = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Header title="Articles" />
      <Article />

      <View style={styles.contentContainer}>
        <SearchInput />
        <View>
          <FlatList
            data={CATEGORIES}
            renderItem={({ item }) => <Category item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.exercisesListContainer}>
          <FlatList<Exercise>
            data={EXERCISES}
            renderItem={({ item, index }) => (
              <ExerciseItem
                item={item}
                isLastRow={index >= EXERCISES.length - 2}
              />
            )}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapperStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Plan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Sizes.CONTENT_PADDING,
  },
  columnWrapperStyle: {
    justifyContent: "space-between",
  },
  exercisesListContainer: {
    flex: 1,
  },
  contentContainer: {
    gap: 34,
    flex: 1,
  },
});
