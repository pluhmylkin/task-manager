import React from 'react'
import createReactClass from 'create-react-class'
import Masonry from 'react-masonry-component';

import taskStyle from '../emotion/task'
import Task from './Task.js'

const TasksGrid = createReactClass({
    render(){
        const masonryOptions = {
            itemSelector: '.'+taskStyle,
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };
        return (
                <Masonry
                    className='TasksGrid'
                    options={masonryOptions}
                >
                {this.props.tasks.map(task =>
                    <Task
                        key={task._id}
                        title={task.title}
                        priority={task.priority}
                        position={task.position}
                        status={task.status}
                        onDelete={this.props.onTaskDelete.bind(null, task)}
                    >
                        {task.title}
                    </Task>
                )}
                </Masonry>
        )
    }
})

export  default TasksGrid;