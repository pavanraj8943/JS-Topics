let todo = []
while (true) {
    let input = prompt("Enter Input Vlaue \n [1]Add Task \n [2] Display Task \n [3] Edite Task \n [4] Delete Task \n [5] Exit")

    // add task

    if (input === "1") {
        let task = prompt("Enter Your Task_Name....!")
        todo.push(task)
    }
    // display task

    else if (input === "2") {
        str = ``;
        for (const [index, tsk] of todo.entries()) {

            str += `[${index + 1}] ${tsk} \n`
        }
        alert(str)
    }

    // edite task


    else if (input === "3") {
        str = ``;
        for (const [index, tsk] of todo.entries()) {

            str += `[${index + 1}] ${tsk} \n`
        }
        let edit = prompt(`${str} \n Enter Id number and Task_name`).split(",")
        todo[edit[0] - 1] = edit[1]
    }

    // delete task

    
    else if (input === "4") {
        str = ``;
        for (const [index, tsk] of todo.entries()) {

            str += `[${index + 1}] ${tsk} \n`
        }
        let del = prompt(`${str} Enter Your Delete Task Id.....!`)
        todo.splice(del - 1, 1)
    }


    // exit

    else if (input === "5") {
        alert(`nanni undeyy...`)
        break;
        
    }
    else ("lnvaild values")

}