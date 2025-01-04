const {exec} = require('child_process');

exec (' echo HELLO!!!... Mr.HARSH', (error, stdout, stderr) =>{ 
    if(error)
    {
        console.log(`Error: ${error.message}`);
        return;
    }
    if(stderr)
    {
        console.log(`stderr: ${stderr}`);
        return;
    }
    else
    {
        console.log(`Output: ${stdout} `);
    }
})
