
<!-- WARNING: THIS FILE WAS AUTOGENERATED! DO NOT EDIT! -->

``` python
from typer.testing import CliRunner

from fastkafka._components.logger import supress_timestamps
```

``` python
# allows async calls in notebooks

import nest_asyncio
```

``` python
nest_asyncio.apply()
```

``` python
supress_timestamps()
logger = get_logger(__name__, level=20)
logger.info("ok")
```

    [INFO] __main__: ok

``` python
runner = CliRunner()
```

------------------------------------------------------------------------

### testing_install_deps

>      testing_install_deps ()

``` python
result = runner.invoke(_testing_app, ["--help"])
```

<pre style={{whiteSpace: 'pre', overflowX: 'auto', lineHeight: 'normal', fontFamily: 'Menlo,"DejaVu Sans Mono",consolas,"Courier New",monospace'}}><span style={{fontWeight: 'bold'}}>                                                                                                                   </span>
<span style={{fontWeight: 'bold'}}> </span><span style={{color: '#808000', textDecorationColor: '#808000', fontWeight: 'bold'}}>Usage: </span><span style={{fontWeight: 'bold'}}>install_deps [OPTIONS]                                                                                     </span>
<span style={{fontWeight: 'bold'}}>                                                                                                                   </span>
</pre>
<pre style={{whiteSpace: 'pre', overflowX: 'auto', lineHeight: 'normal', fontFamily: 'Menlo,"DejaVu Sans Mono",consolas,"Courier New",monospace'}}> Installs dependencies for FastKafka app testing                                                                   
                                                                                                                   
</pre>
<pre style={{whiteSpace: 'pre', overflowX: 'auto', lineHeight: 'normal', fontFamily: 'Menlo,"DejaVu Sans Mono",consolas,"Courier New",monospace'}}><span style={{color: '#7f7f7f', textDecorationColor: '#7f7f7f'}}>╭─ Options ───────────────────────────────────────────────────────────────────────────────────────────────────────╮</span>
<span style={{color: '#7f7f7f', textDecorationColor: '#7f7f7f'}}>│</span> <span style={{color: '#008080', textDecorationColor: '#008080', fontWeight: 'bold'}}>--install-completion</span>          Install completion for the current shell.                                         <span style={{color: '#7f7f7f', textDecorationColor: '#7f7f7f'}}>│</span>
<span style={{color: '#7f7f7f', textDecorationColor: '#7f7f7f'}}>│</span> <span style={{color: '#008080', textDecorationColor: '#008080', fontWeight: 'bold'}}>--show-completion</span>             Show completion for the current shell, to copy it or customize the installation.  <span style={{color: '#7f7f7f', textDecorationColor: '#7f7f7f'}}>│</span>
<span style={{color: '#7f7f7f', textDecorationColor: '#7f7f7f'}}>│</span> <span style={{color: '#008080', textDecorationColor: '#008080', fontWeight: 'bold'}}>--help</span>                        Show this message and exit.                                                       <span style={{color: '#7f7f7f', textDecorationColor: '#7f7f7f'}}>│</span>
<span style={{color: '#7f7f7f', textDecorationColor: '#7f7f7f'}}>╰─────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯</span>
</pre>

``` python
result = runner.invoke(_testing_app)
assert result.exit_code == 0
```

    [INFO] fastkafka._components.test_dependencies: Java is already installed.
    [INFO] fastkafka._components.test_dependencies: But not exported to PATH, exporting...
    [INFO] fastkafka._components.test_dependencies: Kafka is installed.
    [INFO] fastkafka._components.test_dependencies: But not exported to PATH, exporting...