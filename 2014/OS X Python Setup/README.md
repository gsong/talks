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


1.  Use [requirements.txt][] in your own projects to keep track of Python
    package dependencies.

2.  [pyenv][]

    If you need to work on multiple versions of Python, or if you are working
    on an open source package and need to test across multiple versions of
    Python.

    Since you're already using `virtualenvwrapper`, let's go ahead and continue
    using that by installing `pyenv-virtualenvwrapper`.

    ```
    brew install pyenv-virtualenvwrapper
    ```

    Be sure to [read the instructions][pyenv-virtualenvwrapper-instructions] on
    how to use `pyenv-virtualenvwrapper` properly.

3.  [IPython][] is a great alternative Python interactive shell. To install it
    with the [Notebook][ipython-notebook] feature:

    ```
    pip install ipython[notebook]
    ```


---

## Advanced

1.  [NumPy][]/[SciPy][]/[matplotlib][]

    ```
    pip install numpy scipy matplotlib
    ```

2.  [Spyder][]

    Either install using the [DMG][spyder-dls] or [Homebrew
    Cask][homebrew-cask].

3.  [pandas][]

    ```
    pip install pandas
    ```


[pandas]: http://pandas.pydata.org
[flake8]: https://pypi.python.org/pypi/flake8
[homebrew-cask]: https://github.com/caskroom/homebrew-cask
[homebrew]: http://brew.sh
[ipython-notebook]: http://ipython.org/notebook.html
[ipython]: http://ipython.org
[matplotlib]: http://matplotlib.org
[numpy]: http://www.numpy.org
[pep8]: http://legacy.python.org/dev/peps/pep-0008/
[pip]: https://pypi.python.org/pypi/pip
[pyenv-virtualenvwrapper-instructions]: https://github.com/yyuu/pyenv-virtualenvwrapper
[pyenv]: https://github.com/yyuu/pyenv
[python-doc]: https://www.python.org/doc/
[requirements.txt]: https://pip.readthedocs.org/en/latest/user_guide.html#requirements-files
[scipy]: http://www.scipy.org/index.html
[spyder-dls]: https://bitbucket.org/spyder-ide/spyderlib/downloads
[spyder]: https://bitbucket.org/spyder-ide/spyderlib
[virtualenv]: https://pypi.python.org/pypi/virtualenv
[virtualenvwrapper]: https://pypi.python.org/pypi/virtualenvwrapper
