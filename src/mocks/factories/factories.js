import { datatype } from "faker";
import { lorem } from "faker/locale/es";
import { Factory } from "fishery";

const factory = Factory.define(({ sequence }) => ({
  id: sequence,
  task: lorem.sentence(5),
  pending: datatype.boolean(),
}));

export const getRandomTask = () => factory.build();
export const getRandomTasks = (count = 3) => factory.buildList(count);
