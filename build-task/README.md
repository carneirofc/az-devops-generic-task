## Readme....

```powershell
(New-Guid).Guid
```

Compiling and testing

```command
tsc
```

Running

We can run using node and pass environment variables prefixed with input

```command
INPUT_SAMPLESTRING="Human" node ./index.js
```

## Links

- https://github.com/microsoft/azure-pipelines-task-lib
- https://github.com/microsoft/azure-pipelines-task-lib/blob/master/node/README.md
- https://learn.microsoft.com/en-us/azure/devops/extend/develop/add-build-task?toc=%2Fazure%2Fdevops%2Fmarketplace-extensibility%2Ftoc.json&view=azure-devops
