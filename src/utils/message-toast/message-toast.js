export default {
    messageText(html){
        return M.toast({html})
    },
    messageError(html){
        return M.toast({html: `Error:${html}`})
    }
}
