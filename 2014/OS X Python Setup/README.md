# OS X 10.9 Python Development Environment

How to properly set up a Python development environment in OS X.

Accompanying [screencast](http://youtu.be/8SLWfiSjB0Q).

1.  [Homebrew][]

    OS X's unofficial package manager.

    * Takes over `/usr/local`
    * Acts as if the developer is `root` of the machine for non-system packages

    ### Installing homebrew

    1.  Install homebrew

        ```
        ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
        ```

    2.  Edit `.bash_profile` or `.bashrc` to make sure `/usr/local/bin` to the
        front of `$PATH`. If you don't have a shell startup file and are using
        `bash`:

        ```
        echo export PATH='/usr/local/bin:$PATH' >> ~/.bash_profile
        ```

2.  Install a new "system" Python

    ```
    brew install python
    ```

8.  [pip][]

    Python's package manager.

6.  [virtualenv][]/[virtualenvwrapper][]

    1.  Install via `pip`

        ```
        pip install virtualenvwrapper
        ```

    2.  Edit your shell startup file to include the following lines:

        ```
        export WORKON_HOME=$HOME/.virtualenvs
        export PROJECT_HOME=$HOME/Devel
        source /usr/local/bin/virtualenvwrapper.sh
        ```

9.  Editor set up

    * Line width <= 80
    * 4 **space** indents, **never** tabs
    * Syntax highlighting

10. [PEP8][]

    Use [flake8][] to hook into your editor of choice so you can see your
    mistakes while editing.

12. [Python documentation][python-doc]

14. `import this`

---

## Intermediate

If you need to work on multiple versions of Python, or if you are working on an
open source package and need to test across multiple versions of Python.

1.  [requirements.txt][]

15. [pyenv][]

    ```
    brew install pyenv-virtualenvwrapper
    ```

16. [IPython][]

[Homebrew]: http://brew.sh
[IPython]: http://ipython.org
[PEP8]: http://legacy.python.org/dev/peps/pep-0008/
[flake8]: https://pypi.python.org/pypi/flake8
[pip]: https://pypi.python.org/pypi/pip
[pyenv]: https://github.com/yyuu/pyenv
[python-doc]: https://www.python.org/doc/
[requirements.txt]: https://pip.readthedocs.org/en/latest/user_guide.html#requirements-files
[virtualenv]: https://pypi.python.org/pypi/virtualenv
[virtualenvwrapper]: https://pypi.python.org/pypi/virtualenvwrapper
