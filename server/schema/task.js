import {GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLString, GraphQLInt} from 'graphql'
import Task from '../models/task'


let taskType = new GraphQLObjectType({
    name: 'Task',
    fields: {
        _id: {type: GraphQLString},
        title: {type: GraphQLString},
        priority: {type: GraphQLString},
        status: {type: GraphQLString},
        finish: {type: GraphQLString},
        position: {type: GraphQLInt},
    }
});

let queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        getListTask: {
            type: new GraphQLList(taskType),
            resolve: async(root, args) => {
                const tasks = await Task.find({}).sort({position: 1, finish: 1})
                if (tasks) {
                    return tasks.map(t => {
                        t._id = t._id.toString()
                        return t
                    })
                } else {
                    return [];
                }
            }
        },
        getTask: {
            type: taskType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve: async(root, args) => {
                const task = await Task.findOne({_id: args.id})
                if (task) {
                    return task
                } else {
                    return [];
                }
            }
        }
    }
})


let mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addTask: {
            type: taskType,
            args: {

                title: {type: GraphQLString},
                priority: {type: GraphQLString},
                status: {type: GraphQLString},
                finish: {type: GraphQLString},
                position: {type: GraphQLInt}
            },
            resolve: async(root, args) => {
                const task = await new Task(args).save()
                task._id = task._id.toString()
                return task

            }
        },
        deleteTask: {
            type: taskType,
            args: {
                id: {type: GraphQLString}
            },
            resolve: async(root, args) => {
                return await Task.remove({_id: args.id})
            }
        }
    }
})

let schema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType
})
export default schema
