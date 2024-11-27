import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from "./CompleteTask"
import NewTask from "./NewTask"
import FailedTask from "./FailedTask"

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='h-[50%] text-white flex items-center justify-start gap-5 flex-wrap w-full py-5 px-2 mt-10 bg-[#34333324] '>
            {
                data.tasks.map((item, id) => {
                    if (item.active) {
                        return <AcceptTask key={id} data={item} />
                    } else if (item.newTask) {
                        return <NewTask key={id} data={item} />
                    } else if (item.completed) {
                        return <CompleteTask key={id} data={item} />
                    } else if (item.failed) {
                        return <FailedTask key={id} data={item} />
                    }
                })
            }

        </div>
    )
}

export default TaskList