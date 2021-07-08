// scrolls to bottom of container
const ScrollContainerToBottomUsingRef = function(refVariable)
{
    setTimeout(() => 
    {
        try
        {
            refVariable.value.scrollTop = refVariable.value.scrollHeight;
        }
        catch(error)
        {
            console.log(error);
        }

    }, 0);
};

export default ScrollContainerToBottomUsingRef;