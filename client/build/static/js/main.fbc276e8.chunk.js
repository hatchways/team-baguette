(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    221: function (e, t, n) {},
    360: function (e, t, n) {},
    361: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n(14),
        i = n.n(r),
        o = (n(221), n(410)),
        s = n(193),
        c = Object(s.a)({
          typography: {
            fontFamily: '"Open Sans", "sans-serif", "Roboto"',
            fontSize: 12,
            button: { textTransform: 'none', fontWeight: 700 },
          },
          palette: { primary: { main: '#3A8DFF' }, secondary: { main: 'rgb(245, 20, 20)' } },
          shape: { borderRadius: 5 },
        }),
        l = n(59),
        u = n(17),
        d = n(406),
        p = n(198),
        b = n(413),
        h = n(405),
        m = n(110),
        j = n(397),
        g = Object(j.a)(function () {
          return {
            root: {
              minHeight: '100vh',
              '& .MuiInput-underline:before': { borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)' },
            },
            authWrapper: {
              display: 'flex',
              alignItems: 'center',
              minWidth: '100vw',
              minHeight: '100vh',
              justifyContent: 'space-around',
              flexDirection: 'column',
              paddingTop: 23,
            },
            welcome: {
              fontSize: 32,
              paddingBottom: 20,
              color: '#000000',
              fontFamily: 'Poppins-Bold',
              textAlign: 'center',
            },
          };
        }),
        f = n(13),
        x = n.n(f),
        O = n(21),
        v = (function () {
          var e = Object(O.a)(
            x.a.mark(function e(t, n) {
              var a;
              return x.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ email: t, password: n }),
                          credentials: 'include',
                        }),
                        (e.next = 3),
                        fetch('/auth/login', a)
                          .then(function (e) {
                            return e.json();
                          })
                          .catch(function () {
                            return { error: { message: 'Unable to connect to server. Please try again' } };
                          })
                      );
                    case 3:
                      return e.abrupt('return', e.sent);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        w = n(402),
        y = n(412),
        C = n(81),
        S = n(46),
        k = Object(j.a)(function (e) {
          return {
            form: { width: '100%', marginTop: e.spacing(1) },
            label: {
              fontSize: 16,
              paddingLeft: '5px',
              textTransform: 'uppercase',
              color: 'black',
              fontFamily: 'Poppins-Bold',
            },
            inputs: {
              marginTop: '.8rem',
              height: '2rem',
              padding: '5px',
              fontFamily: 'Poppins-Regular',
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '5px',
            },
            forgot: { paddingRight: 10, color: '#3a8dff', display: 'none' },
            submit: {
              padding: 10,
              width: 160,
              height: 56,
              borderRadius: e.shape.borderRadius,
              marginTop: 49,
              fontSize: 14,
              backgroundColor: 'rgb(240, 69, 69)',
              color: 'white',
              textTransform: 'uppercase',
              fontFamily: 'Poppins-Regular',
              letterSpacing: 1.1,
            },
            demoSubmit: {
              margin: e.spacing(3, 2, 2),
              padding: 10,
              width: 160,
              height: 56,
              borderRadius: e.shape.borderRadius,
              marginTop: 49,
              fontSize: 14,
              backgroundColor: 'rgb(240, 69, 69)',
              color: 'white',
              textTransform: 'uppercase',
              fontFamily: 'Poppins-Regular',
              letterSpacing: 1.1,
            },
          };
        }),
        N = n(403),
        T = n(2);
      function P(e) {
        var t = e.handleSubmit,
          n = k();
        return Object(T.jsxs)(T.Fragment, {
          children: [
            Object(T.jsx)(C.a, {
              initialValues: { email: '', password: '' },
              validationSchema: S.a().shape({
                email: S.b().required('Email is required').email('Email is not valid'),
                password: S.b()
                  .required('Password is required')
                  .max(100, 'Password is too long')
                  .min(6, 'Password too short'),
              }),
              onSubmit: t,
              children: function (e) {
                var t = e.handleSubmit,
                  a = e.handleChange,
                  r = e.values,
                  i = e.touched,
                  o = e.errors,
                  s = e.isSubmitting;
                return Object(T.jsxs)('form', {
                  onSubmit: t,
                  className: n.form,
                  noValidate: !0,
                  children: [
                    Object(T.jsx)(y.a, {
                      id: 'email',
                      label: Object(T.jsx)(m.a, { className: n.label, children: 'Email address' }),
                      fullWidth: !0,
                      margin: 'normal',
                      InputLabelProps: { shrink: !0 },
                      InputProps: { classes: { input: n.inputs }, disableUnderline: !0 },
                      name: 'email',
                      autoComplete: 'email',
                      placeholder: 'Your email',
                      autoFocus: !0,
                      helperText: i.email ? o.email : '',
                      error: i.email && Boolean(o.email),
                      value: r.email,
                      onChange: a,
                    }),
                    Object(T.jsx)(y.a, {
                      id: 'password',
                      label: Object(T.jsx)(m.a, { className: n.label, children: 'Password' }),
                      fullWidth: !0,
                      margin: 'normal',
                      InputLabelProps: { shrink: !0 },
                      InputProps: {
                        classes: { input: n.inputs },
                        disableUnderline: !0,
                        endAdornment: Object(T.jsx)(m.a, { className: n.forgot, children: 'Forgot?' }),
                      },
                      type: 'password',
                      autoComplete: 'current-password',
                      placeholder: 'Your password',
                      helperText: i.password ? o.password : '',
                      error: i.password && Boolean(o.password),
                      value: r.password,
                      onChange: a,
                    }),
                    Object(T.jsx)(b.a, {
                      textAlign: 'center',
                      children: Object(T.jsx)(w.a, {
                        type: 'submit',
                        size: 'large',
                        variant: 'contained',
                        color: 'secondary',
                        className: n.submit,
                        children: s ? Object(T.jsx)(N.a, { style: { color: 'white' } }) : 'Login',
                      }),
                    }),
                  ],
                });
              },
            }),
            Object(T.jsx)(C.a, {
              initialValues: { email: ''.concat('demoUser@email.com'), password: ''.concat('deus123') },
              onSubmit: t,
              children: function (e) {
                var t = e.handleSubmit,
                  a = e.isSubmitting;
                return Object(T.jsx)('form', {
                  onSubmit: t,
                  className: n.form,
                  noValidate: !0,
                  children: Object(T.jsx)(b.a, {
                    textAlign: 'center',
                    children: Object(T.jsx)(w.a, {
                      type: 'submit',
                      size: 'large',
                      variant: 'contained',
                      color: 'secondary',
                      className: n.demoSubmit,
                      children: a ? Object(T.jsx)(N.a, { style: { color: 'white' } }) : 'Demo',
                    }),
                  }),
                });
              },
            }),
          ],
        });
      }
      var I = Object(j.a)(function () {
          return {
            authHeader: {
              alignSelf: 'flex-end',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexWrap: 'wrap',
              fontFamily: 'Poppins-Bold',
            },
            accAside: {
              fontSize: 13,
              fontFamily: 'Poppins-Bold',
              textAlign: 'center',
              marginRight: 5,
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              padding: '1rem 0',
            },
            link: { textDecoration: 'underlined', color: 'rgb(240, 69, 69)' },
          };
        }),
        D = function (e) {
          var t = e.linkTo,
            n = e.asideText,
            a = e.btnText,
            r = I();
          return Object(T.jsxs)(b.a, {
            p: 1,
            className: r.authHeader,
            children: [
              Object(T.jsx)(m.a, { className: r.accAside, children: n }),
              Object(T.jsx)(l.b, { to: t, className: r.link, children: a }),
            ],
          });
        },
        R = n(12),
        B = (function () {
          var e = Object(O.a)(
            x.a.mark(function e() {
              var t;
              return x.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = { method: 'GET', credentials: 'include' }),
                        (e.next = 3),
                        fetch('/auth/user', t)
                          .then(function (e) {
                            return e.json();
                          })
                          .catch(function () {
                            return { error: { message: 'Unable to connect to server. Please try again' } };
                          })
                      );
                    case 3:
                      return e.abrupt('return', e.sent);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        E = (function () {
          var e = Object(O.a)(
            x.a.mark(function e() {
              var t;
              return x.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = { method: 'GET', credentials: 'include' }),
                        (e.next = 3),
                        fetch('/auth/logout', t)
                          .then(function (e) {
                            return e.json();
                          })
                          .catch(function () {
                            return { error: { message: 'Unable to connect to server. Please try again' } };
                          })
                      );
                    case 3:
                      return e.abrupt('return', e.sent);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        W = Object(a.createContext)({
          loggedInUser: void 0,
          updateLoginContext: function () {
            return null;
          },
          logout: function () {
            return null;
          },
        }),
        F = function (e) {
          var t = e.children,
            n = Object(a.useState)(),
            r = Object(R.a)(n, 2),
            i = r[0],
            o = r[1],
            s = Object(u.g)(),
            c = Object(a.useCallback)(
              function (e) {
                o(e.user), s.push('/dashboard');
              },
              [s],
            ),
            l = Object(a.useCallback)(
              Object(O.a)(
                x.a.mark(function e() {
                  return x.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            E()
                              .then(function () {
                                s.push('/login'), o(null);
                              })
                              .catch(function (e) {
                                return console.error(e);
                              })
                          );
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
              [s],
            );
          return (
            Object(a.useEffect)(
              function () {
                (function () {
                  var e = Object(O.a)(
                    x.a.mark(function e() {
                      return x.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                B().then(function (e) {
                                  e.success ? (c(e.success), s.push('/dashboard')) : (o(null), s.push('/login'));
                                })
                              );
                            case 2:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              },
              [c, s],
            ),
            Object(T.jsx)(W.Provider, { value: { loggedInUser: i, updateLoginContext: c, logout: l }, children: t })
          );
        };
      function U() {
        return Object(a.useContext)(W);
      }
      var q = n(415),
        z = n(404),
        L = n(187),
        A = n.n(L),
        M = Object(a.createContext)({
          updateSnackBarMessage: function () {
            return null;
          },
        }),
        H = function (e) {
          var t = e.children,
            n = Object(a.useState)(null),
            r = Object(R.a)(n, 2),
            i = r[0],
            o = r[1],
            s = Object(a.useState)(!1),
            c = Object(R.a)(s, 2),
            l = c[0],
            u = c[1],
            d = Object(a.useCallback)(function (e) {
              o(e), u(!0);
            }, []),
            p = Object(a.useCallback)(function () {
              u(!1);
            }, []),
            b = Object(a.useCallback)(function (e, t) {
              'clickaway' !== t && u(!1);
            }, []);
          return Object(T.jsxs)(M.Provider, {
            value: { updateSnackBarMessage: d },
            children: [
              t,
              Object(T.jsx)(q.a, {
                anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                open: l,
                autoHideDuration: 6e3,
                onClose: b,
                message: i,
                action: Object(T.jsx)(z.a, {
                  size: 'small',
                  'aria-label': 'close',
                  color: 'inherit',
                  onClick: p,
                  children: Object(T.jsx)(A.a, { fontSize: 'small' }),
                }),
              }),
            ],
          });
        };
      function G() {
        return Object(a.useContext)(M);
      }
      function _() {
        var e = g(),
          t = U().updateLoginContext,
          n = G().updateSnackBarMessage;
        return Object(T.jsxs)(h.a, {
          container: !0,
          component: 'main',
          className: e.root,
          children: [
            Object(T.jsx)(d.a, {}),
            Object(T.jsx)(h.a, {
              item: !0,
              xs: 12,
              component: p.a,
              square: !0,
              children: Object(T.jsxs)(b.a, {
                className: e.authWrapper,
                children: [
                  Object(T.jsxs)(b.a, {
                    width: '100%',
                    maxWidth: 450,
                    p: 3,
                    alignSelf: 'center',
                    children: [
                      Object(T.jsx)(h.a, {
                        container: !0,
                        children: Object(T.jsx)(h.a, {
                          item: !0,
                          xs: !0,
                          children: Object(T.jsx)(m.a, {
                            className: e.welcome,
                            component: 'h1',
                            variant: 'h5',
                            children: 'Welcome back!',
                          }),
                        }),
                      }),
                      Object(T.jsx)(P, {
                        handleSubmit: function (e, a) {
                          var r = e.email,
                            i = e.password,
                            o = a.setSubmitting;
                          v(r, i).then(function (e) {
                            e.error
                              ? (o(!1), n(e.error.message))
                              : e.success
                              ? t(e.success)
                              : (console.error({ data: e }),
                                o(!1),
                                n('An unexpected error occurred. Please try again'));
                          });
                        },
                      }),
                      Object(T.jsx)(D, {
                        linkTo: '/signup',
                        asideText: "Don't have an account?",
                        btnText: 'Create account',
                      }),
                    ],
                  }),
                  Object(T.jsx)(b.a, { p: 1, alignSelf: 'center' }),
                ],
              }),
            }),
          ],
        });
      }
      var V = Object(j.a)(function () {
          return {
            root: {
              minHeight: '100vh',
              '& .MuiInput-underline:before': { borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)' },
            },
            authWrapper: {
              display: 'flex',
              alignItems: 'center',
              minWidth: '100vw',
              minHeight: '100vh',
              justifyContent: 'space-around',
              flexDirection: 'column',
              paddingTop: 23,
            },
            welcome: {
              fontSize: 32,
              paddingBottom: 20,
              color: '#000000',
              fontFamily: 'Poppins-Bold',
              textAlign: 'center',
            },
          };
        }),
        Y = (function () {
          var e = Object(O.a)(
            x.a.mark(function e(t, n, a) {
              var r;
              return x.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ username: t, email: n, password: a }),
                          credentials: 'include',
                        }),
                        (e.next = 3),
                        fetch('/auth/register', r)
                          .then(function (e) {
                            return e.json();
                          })
                          .catch(function () {
                            return { error: { message: 'Unable to connect to server. Please try again' } };
                          })
                      );
                    case 3:
                      return e.abrupt('return', e.sent);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n, a) {
            return e.apply(this, arguments);
          };
        })(),
        J = Object(j.a)(function (e) {
          return {
            form: { width: '100%', marginTop: e.spacing(1) },
            label: {
              fontSize: 16,
              paddingLeft: '5px',
              textTransform: 'uppercase',
              color: 'black',
              fontFamily: 'Poppins-Bold',
            },
            inputs: {
              marginTop: '.8rem',
              height: '2rem',
              padding: '5px',
              fontFamily: 'Poppins-Regular',
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '5px',
            },
            submit: {
              padding: 10,
              width: 160,
              height: 56,
              borderRadius: e.shape.borderRadius,
              marginTop: 49,
              fontSize: 14,
              backgroundColor: 'rgb(240, 69, 69)',
              color: 'white',
              textTransform: 'uppercase',
              fontFamily: 'Poppins-Regular',
              letterSpacing: 1.1,
            },
            demoSubmit: {
              margin: e.spacing(1, 2, 2),
              padding: 10,
              width: 160,
              height: 56,
              borderRadius: e.shape.borderRadius,
              marginTop: 49,
              fontSize: 14,
              backgroundColor: 'rgb(240, 69, 69)',
              color: 'white',
              textTransform: 'uppercase',
              fontFamily: 'Poppins-Regular',
              letterSpacing: 1.1,
            },
          };
        }),
        K = function (e) {
          var t = e.handleSubmit,
            n = J();
          return Object(T.jsx)(C.a, {
            initialValues: { email: '', password: '', username: '' },
            validationSchema: S.a().shape({
              username: S.b().required('Username is required').max(40, 'Username is too long'),
              email: S.b().required('Email is required').email('Email is not valid'),
              password: S.b()
                .required('Password is required')
                .max(100, 'Password is too long')
                .min(6, 'Password too short'),
            }),
            onSubmit: t,
            children: function (e) {
              var t = e.handleSubmit,
                a = e.handleChange,
                r = e.values,
                i = e.touched,
                o = e.errors,
                s = e.isSubmitting;
              return Object(T.jsxs)('form', {
                onSubmit: t,
                className: n.form,
                noValidate: !0,
                children: [
                  Object(T.jsx)(y.a, {
                    id: 'email',
                    label: Object(T.jsx)(m.a, { className: n.label, children: 'Email address' }),
                    fullWidth: !0,
                    margin: 'normal',
                    placeholder: 'Your email',
                    InputLabelProps: { shrink: !0 },
                    InputProps: { classes: { input: n.inputs }, disableUnderline: !0 },
                    autoFocus: !0,
                    name: 'email',
                    autoComplete: 'email',
                    helperText: i.email ? o.email : '',
                    error: i.email && Boolean(o.email),
                    value: r.email,
                    onChange: a,
                  }),
                  Object(T.jsx)(y.a, {
                    id: 'username',
                    label: Object(T.jsx)(m.a, { className: n.label, children: 'name' }),
                    fullWidth: !0,
                    margin: 'normal',
                    placeholder: 'Your name',
                    InputLabelProps: { shrink: !0 },
                    InputProps: { classes: { input: n.inputs }, disableUnderline: !0 },
                    name: 'username',
                    autoComplete: 'username',
                    helperText: i.username ? o.username : '',
                    error: i.username && Boolean(o.username),
                    value: r.username,
                    onChange: a,
                  }),
                  Object(T.jsx)(y.a, {
                    id: 'password',
                    label: Object(T.jsx)(m.a, { className: n.label, children: 'Password' }),
                    fullWidth: !0,
                    margin: 'normal',
                    placeholder: 'Create a password',
                    InputLabelProps: { shrink: !0 },
                    InputProps: { classes: { input: n.inputs }, disableUnderline: !0 },
                    type: 'password',
                    autoComplete: 'current-password',
                    helperText: i.password ? o.password : '',
                    error: i.password && Boolean(o.password),
                    value: r.password,
                    onChange: a,
                  }),
                  Object(T.jsx)(b.a, {
                    textAlign: 'center',
                    children: Object(T.jsx)(w.a, {
                      type: 'submit',
                      size: 'large',
                      color: 'secondary',
                      variant: 'contained',
                      className: n.submit,
                      children: s ? Object(T.jsx)(N.a, { style: { color: 'white' } }) : 'sign up',
                    }),
                  }),
                ],
              });
            },
          });
        };
      function X() {
        var e = V(),
          t = U().updateLoginContext,
          n = G().updateSnackBarMessage;
        return Object(T.jsxs)(h.a, {
          container: !0,
          component: 'main',
          className: e.root,
          children: [
            Object(T.jsx)(d.a, {}),
            Object(T.jsx)(h.a, {
              item: !0,
              xs: 12,
              component: p.a,
              square: !0,
              children: Object(T.jsxs)(b.a, {
                className: e.authWrapper,
                children: [
                  Object(T.jsxs)(b.a, {
                    width: '100%',
                    maxWidth: 450,
                    p: 3,
                    alignSelf: 'center',
                    children: [
                      Object(T.jsx)(h.a, {
                        container: !0,
                        children: Object(T.jsx)(h.a, {
                          item: !0,
                          xs: !0,
                          children: Object(T.jsx)(m.a, {
                            className: e.welcome,
                            component: 'h1',
                            variant: 'h5',
                            children: 'Sign up',
                          }),
                        }),
                      }),
                      Object(T.jsx)(K, {
                        handleSubmit: function (e, a) {
                          var r = e.username,
                            i = e.email,
                            o = e.password,
                            s = a.setSubmitting;
                          Y(r, i, o).then(function (e) {
                            e.error
                              ? (console.error({ error: e.error.message }), s(!1), n(e.error.message))
                              : e.success
                              ? t(e.success)
                              : (console.error({ data: e }),
                                s(!1),
                                n('An unexpected error occurred. Please try again'));
                          });
                        },
                      }),
                      Object(T.jsx)(D, { linkTo: '/login', asideText: 'Already a member?', btnText: 'Login' }),
                    ],
                  }),
                  Object(T.jsx)(b.a, { p: 1, alignSelf: 'center' }),
                ],
              }),
            }),
          ],
        });
      }
      var $ = n(70),
        Q = Object(j.a)(function (e) {
          return {
            root: {
              minHeight: '100vh',
              '& .MuiInput-underline:before': { borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)' },
            },
            dashboard: { backgroundColor: '#FFFFFF' },
            drawerWrapper: Object($.a)({ width: 240 }, e.breakpoints.up('md'), { width: '300px' }),
          };
        }),
        Z = n(188),
        ee = Object(a.createContext)({
          socket: void 0,
          initSocket: function () {
            return null;
          },
        }),
        te = function (e) {
          var t = e.children,
            n = Object(a.useState)(void 0),
            r = Object(R.a)(n, 2),
            i = r[0],
            o = r[1],
            s = Object(a.useCallback)(function () {
              console.log('trying to connect'), o(Object(Z.io)('/', { withCredentials: !0 }));
            }, []);
          return Object(T.jsx)(ee.Provider, { value: { socket: i, initSocket: s }, children: t });
        };
      var ne = Object(j.a)(function (e) {
          return {
            chatSideBanner: Object($.a)(
              { display: 'flex', flexDirection: 'column', height: '100vh', padding: '1rem 1rem', width: 240 },
              e.breakpoints.up('md'),
              { padding: '2rem 2rem', width: '300px' },
            ),
            userPanel: { display: 'flex', alignItems: 'center', marginBottom: '2rem' },
            userText: { fontWeight: 700, paddingLeft: '1rem', fontSize: 16 },
            chatTitle: { fontWeight: 700, fontSize: 20, margin: '1rem 0' },
            chatSummaryContainer: { overflowY: 'auto', marginTop: '1rem' },
            newChatBtn: { margin: '1rem 0' },
            noChatToSelectText: { margin: '1rem 0' },
          };
        }),
        ae = n(417),
        re = function (e) {
          var t = e.user;
          return Object(T.jsx)(ae.a, { alt: 'Profile Image', src: 'https://robohash.org/'.concat(t.email, '.png') });
        },
        ie = n(134),
        oe = Object(j.a)(function (e) {
          return {
            search: {
              position: 'relative',
              borderRadius: e.shape.borderRadius,
              backgroundColor: '#E9EEF9',
              marginLeft: 0,
              height: '50px',
              lineHeight: '18px',
              width: 'calc('.concat(240, ' - 2rem)'),
            },
            searchRoot: { color: 'inherit', width: '100%', height: '100%' },
            searchInput: {
              padding: e.spacing(1, 1, 1, 0),
              paddingLeft: 'calc(1em + '.concat(e.spacing(4), 'px)'),
              width: '100%',
              fontWeight: 600,
            },
            searchIcon: {
              height: '100%',
              position: 'absolute',
              pointerEvents: 'none',
              marginLeft: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          };
        }),
        se = n(190),
        ce = n.n(se),
        le = n(416),
        ue = n(414),
        de = n(421);
      function pe(e) {
        return be.apply(this, arguments);
      }
      function be() {
        return (be = Object(O.a)(
          x.a.mark(function e(t) {
            var n, a;
            return x.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.search),
                      (a = { method: 'GET', credentials: 'include' }),
                      (e.next = 4),
                      fetch('/users?search='.concat(n), a)
                        .then(function (e) {
                          return e.json();
                        })
                        .catch(function () {
                          return { error: { message: 'Unable to connect to server. Please try again' } };
                        })
                    );
                  case 4:
                    return e.abrupt('return', e.sent);
                  case 5:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      var he = function (e) {
          var t = e.search,
            n = e.handleChange,
            r = Object(a.useState)(!1),
            i = Object(R.a)(r, 2),
            o = i[0],
            s = i[1],
            c = Object(a.useState)([]),
            l = Object(R.a)(c, 2),
            u = l[0],
            d = l[1],
            p = Object(a.useState)(!1),
            b = Object(R.a)(p, 2),
            h = b[0],
            m = b[1],
            j = Object(de.a)(t, 500),
            g = Object(R.a)(j, 1)[0],
            f = oe(),
            v = function (e) {
              d(e);
            };
          return (
            Object(a.useEffect)(
              function () {
                var e = !0;
                function t() {
                  return (t = Object(O.a)(
                    x.a.mark(function t() {
                      var n;
                      return x.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return m(!0), (t.next = 3), pe({ search: g });
                            case 3:
                              (n = t.sent), e && n && n.users && (console.log(n), v(n.users)), m(!1);
                            case 6:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    }),
                  )).apply(this, arguments);
                }
                return (
                  (function () {
                    t.apply(this, arguments);
                  })(),
                  function () {
                    e = !1;
                  }
                );
              },
              [g],
            ),
            Object(T.jsx)('form', {
              onSubmit: function (e) {
                e.preventDefault();
              },
              children: Object(T.jsx)(ue.a, {
                id: 'asynchronous-search',
                open: o,
                onOpen: function () {
                  s(!0);
                },
                onClose: function () {
                  s(!1);
                },
                getOptionSelected: function (e, t) {
                  return e.username === t.username;
                },
                getOptionLabel: function (e) {
                  return e.username;
                },
                options: u,
                loading: h,
                onInputChange: n,
                inputValue: t,
                noOptionsText: 'No Users Found',
                freeSolo: !0,
                renderInput: function (e) {
                  return Object(T.jsx)('div', {
                    className: f.search,
                    children: Object(T.jsx)(
                      le.a,
                      Object(ie.a)(
                        Object(ie.a)({}, e.inputProps),
                        {},
                        {
                          placeholder: 'Search',
                          classes: { root: f.searchRoot, input: f.searchInput },
                          inputProps: { 'aria-label': 'search', ref: e.InputProps.ref },
                          startAdornment: Object(T.jsx)('div', {
                            className: f.searchIcon,
                            children: Object(T.jsx)(ce.a, {}),
                          }),
                        },
                      ),
                    ),
                  });
                },
              }),
            })
          );
        },
        me = n(194),
        je = n(418),
        ge = n(191),
        fe = n.n(ge),
        xe = function () {
          var e = Object(a.useState)(null),
            t = Object(R.a)(e, 2),
            n = t[0],
            r = t[1],
            i = Boolean(n),
            o = U().logout,
            s = Object(u.g)(),
            c = function () {
              r(null);
            };
          return Object(T.jsxs)('div', {
            children: [
              Object(T.jsx)(z.a, {
                'aria-label': 'show auth menu',
                'aria-controls': 'auth-menu',
                'aria-haspopup': 'true',
                onClick: function (e) {
                  r(e.currentTarget);
                },
                children: Object(T.jsx)(fe.a, {}),
              }),
              Object(T.jsxs)(me.a, {
                id: 'auth-menu',
                anchorEl: n,
                keepMounted: !0,
                open: i,
                onClose: c,
                anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                getContentAnchorEl: null,
                children: [
                  Object(T.jsx)(je.a, {
                    onClick: function () {
                      c(), o();
                    },
                    children: 'Logout',
                  }),
                  Object(T.jsx)(je.a, {
                    onClick: function () {
                      s.push('/bookings');
                    },
                    children: 'Bookings',
                  }),
                ],
              }),
            ],
          });
        },
        Oe = function (e) {
          var t = e.loggedInUser,
            n = Object(a.useState)('test'),
            r = Object(R.a)(n, 2),
            i = r[0],
            o = r[1],
            s = Object(a.useState)(null),
            c = Object(R.a)(s, 2),
            l = c[0],
            u = c[1],
            d = ne();
          return Object(T.jsxs)(h.a, {
            className: d.chatSideBanner,
            children: [
              Object(T.jsxs)(b.a, {
                className: d.userPanel,
                children: [
                  Object(T.jsx)(re, { loggedIn: !0, user: t }),
                  Object(T.jsx)(m.a, { className: d.userText, variant: 'h5', children: t.username }),
                  Object(T.jsx)(xe, {}),
                ],
              }),
              Object(T.jsxs)(b.a, {
                children: [
                  Object(T.jsx)(m.a, { className: d.chatTitle, variant: 'h5', children: 'Users' }),
                  Object(T.jsx)(he, {
                    search: i,
                    handleChange: function (e, t) {
                      o(t), l && u(null);
                    },
                  }),
                ],
              }),
            ],
          });
        };
      function ve() {
        var e = Q(),
          t = U().loggedInUser,
          n = Object(a.useContext)(ee).initSocket,
          r = Object(u.g)();
        return (
          Object(a.useEffect)(
            function () {
              n();
            },
            [n],
          ),
          void 0 === t
            ? Object(T.jsx)(N.a, {})
            : t
            ? Object(T.jsxs)(h.a, {
                container: !0,
                component: 'main',
                className: ''.concat(e.root, ' ').concat(e.dashboard),
                children: [
                  Object(T.jsx)(d.a, {}),
                  Object(T.jsx)(h.a, {
                    item: !0,
                    className: e.drawerWrapper,
                    children: Object(T.jsx)(Oe, { loggedInUser: t }),
                  }),
                ],
              })
            : (r.push('/login'), Object(T.jsx)(N.a, {}))
        );
      }
      var we = Object(j.a)(function () {
          return {
            root: { minWidth: '100vw' },
            bookingsWrapper: { backgroundColor: 'rgb(250, 250, 250)' },
            bookingsList: { padding: '5% 3% 0 3%', display: 'flex', alignItems: 'flex-end' },
            bookingsCardNext: { width: '320px', display: 'flex', flexDirection: 'column' },
            bookingsCardContainer: {
              maxHeight: '80vh',
              width: '320px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
            scrollableBox: {
              paddingRight: '3px',
              overflowY: 'scroll',
              '&::-webkit-scrollbar': { width: '4px' },
              '&::-webkit-scrollbar-thumb': {
                borderRadius: '3px',
                height: '50px',
                backgroundColor: 'rgba(168, 168, 168, 0.7)',
              },
            },
            bookingsCardItem: { alignItems: 'unset', width: '280px', height: '86px', marginBottom: '8px' },
            bookingsCardContent: { padding: '8px 8px 0 16px', display: 'flex', justifyContent: 'space-between' },
            iconSettings: { fill: 'rgba(0,0,0,0.2)', height: '15px', cursor: 'pointer' },
            typographyCurrent: { fontWeight: 900, fontSize: '10px', padding: '10px 0 10px 16px', alignSelf: 'start' },
            typographyPast: { fontWeight: 900, fontSize: '10px', padding: '10px 0 10px 0', alignSelf: 'start' },
            bookingsCalendar: { padding: '5% 3% 0 3%', display: 'flex', justifyContent: 'flex-start' },
            calendarContainer: {
              width: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '& .MuiTypography-body1': { color: 'rgb(240, 69, 69)', fontWeight: '400' },
              '& .MuiPickersDay-day': { padding: '0 20px' },
              '& .MuiPickersDay-daySelected': { backgroundColor: 'unset', color: 'unset' },
              '& .MuiPickersDay-daySelected:hover': { backgroundColor: 'rgb(245, 245, 245)', color: 'unset' },
              '& .MuiTypography-caption': { padding: '20px', display: 'flex', justifyContent: 'center' },
              '& .MuiSvgIcon-root': { color: 'rgba(0,0,0,0.2)' },
            },
            iconStatus: {
              '& .MuiCardHeader-action': { color: 'rgba(0,0,0,0.4)', fontSize: '10px', fontWeight: '900' },
            },
            customSelectedDay: {
              '& button': { backgroundColor: 'rgb(240, 69, 69)', color: 'white' },
              '& button:hover': { backgroundColor: 'rgb(240, 69, 69)' },
            },
          };
        }),
        ye = n(407),
        Ce = n(408),
        Se = n(409),
        ke = n(109),
        Ne = n.n(ke),
        Te = n(25),
        Pe = n(411),
        Ie = n(192),
        De = (function () {
          var e = Object(O.a)(
            x.a.mark(function e() {
              return x.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        fetch('/requests/sitter', {
                          method: 'GET',
                          headers: { 'Content-Type': 'application/json' },
                          credentials: 'include',
                        })
                          .then(function (e) {
                            return e.json();
                          })
                          .catch(function () {
                            return { error: { message: 'Unable to get requests. Please try again' } };
                          })
                      );
                    case 2:
                      return e.abrupt('return', e.sent);
                    case 3:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Re = (function () {
          var e = Object(O.a)(
            x.a.mark(function e(t, n) {
              return x.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        fetch('/requests', {
                          method: 'PUT',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ reqId: t, accepted: n }),
                          credentials: 'include',
                        })
                          .then(function (e) {
                            return e.json();
                          })
                          .catch(function () {
                            return { error: { message: 'Unable to update request. Please try again' } };
                          })
                      );
                    case 2:
                      return e.abrupt('return', e.sent);
                    case 3:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        Be = Object(j.a)(function () {
          return { iconSettings: { fill: 'rgba(0,0,0,0.2)', height: '15px', cursor: 'pointer' } };
        }),
        Ee = function (e) {
          var t = e.ind,
            n = e.eleId,
            r = e.setDateReqs,
            i = e.selectedDate,
            o = e.setNextReq,
            s = Be(),
            c = Object(a.useState)(null),
            l = Object(R.a)(c, 2),
            u = l[0],
            d = l[1],
            p = function (e, t) {
              Re(e, t),
                d(null),
                De().then(function (e) {
                  if (e) {
                    r(e);
                    var t = e.find(function (e) {
                      return new Date(e.start).getTime() >= i.getTime() && e.accepted;
                    });
                    t && o(t);
                  }
                });
            };
          return Object(T.jsxs)(T.Fragment, {
            children: [
              Object(T.jsx)(
                Ne.a,
                {
                  focusable: !0,
                  className: s.iconSettings,
                  onClick: function (e) {
                    d(e.currentTarget);
                  },
                },
                t,
              ),
              Object(T.jsxs)(me.a, {
                anchorEl: u,
                anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                getContentAnchorEl: null,
                keepMounted: !0,
                open: Boolean(u),
                onClose: function () {
                  d(null);
                },
                children: [
                  Object(T.jsx)(je.a, {
                    onClick: function () {
                      return p(n, 'accepted');
                    },
                    children: 'Accept',
                  }),
                  Object(T.jsx)(je.a, {
                    onClick: function () {
                      return p(n, 'declined');
                    },
                    children: 'Deny',
                  }),
                ],
              }),
            ],
          });
        };
      function We() {
        var e = we(),
          t = Object(a.useState)(new Date()),
          n = Object(R.a)(t, 2),
          r = n[0],
          i = n[1],
          o = Object(a.useState)(new Array()),
          s = Object(R.a)(o, 2),
          c = s[0],
          l = s[1],
          u = Object(a.useState)({
            _id: '-',
            user: { username: 'No Accepted Requests', _id: '-' },
            sitterId: '-',
            accepted: !1,
            declined: !1,
            dogType: '-',
            end: new Date(),
            paid: !1,
            specialNotes: '-',
            start: new Date(),
          }),
          d = Object(R.a)(u, 2),
          j = d[0],
          g = d[1];
        Object(a.useEffect)(
          function () {
            De().then(function (e) {
              if (e) {
                l(e);
                var t = e.find(function (e) {
                  return new Date(e.start).getTime() >= r.getTime() && e.accepted;
                });
                t && g(t);
              }
            });
          },
          [r],
        );
        return Object(T.jsx)(h.a, {
          container: !0,
          className: ''.concat(e.root),
          children: Object(T.jsxs)(h.a, {
            xs: 12,
            item: !0,
            className: e.bookingsWrapper,
            container: !0,
            children: [
              Object(T.jsxs)(h.a, {
                item: !0,
                xs: 5,
                className: e.bookingsList,
                container: !0,
                direction: 'column',
                spacing: 1,
                children: [
                  Object(T.jsx)(h.a, {
                    item: !0,
                    children:
                      j &&
                      Object(T.jsxs)(
                        ye.a,
                        {
                          elevation: 2,
                          className: e.bookingsCardNext,
                          children: [
                            Object(T.jsx)(m.a, { className: e.typographyCurrent, children: 'YOUR NEXT BOOKING:' }),
                            Object(T.jsxs)(Ce.a, {
                              className: e.bookingsCardContent,
                              children: [
                                Object(T.jsx)(m.a, {
                                  variant: 'h6',
                                  noWrap: !0,
                                  display: 'inline',
                                  children: new Date(j.start).toDateString(),
                                }),
                                Object(T.jsx)(Ee, {
                                  ind: j._id,
                                  eleId: j._id,
                                  setDateReqs: l,
                                  selectedDate: r,
                                  setNextReq: g,
                                }),
                              ],
                            }),
                            Object(T.jsx)(Se.a, {
                              className: e.iconStatus,
                              avatar: 'avatar',
                              title: ''.concat(j.user.username),
                            }),
                          ],
                        },
                        j._id,
                      ),
                  }),
                  Object(T.jsx)(h.a, {
                    item: !0,
                    children: Object(T.jsx)(ye.a, {
                      elevation: 2,
                      className: e.bookingsCardContainer,
                      children: Object(T.jsxs)(b.a, {
                        className: e.scrollableBox,
                        children: [
                          Object(T.jsx)(m.a, { className: e.typographyPast, children: 'CURRENT BOOKINGS:' }),
                          !!c.length &&
                            c.map(function (t, n) {
                              return r.getTime() < new Date(t.start).getTime()
                                ? Object(T.jsxs)(
                                    ye.a,
                                    {
                                      variant: 'outlined',
                                      className: e.bookingsCardItem,
                                      children: [
                                        Object(T.jsxs)(Ce.a, {
                                          className: e.bookingsCardContent,
                                          children: [
                                            Object(T.jsx)(m.a, {
                                              variant: 'h6',
                                              noWrap: !0,
                                              display: 'inline',
                                              children: new Date(t.start).toDateString(),
                                            }),
                                            Object(T.jsx)(Ee, {
                                              ind: n,
                                              eleId: t._id,
                                              setDateReqs: l,
                                              selectedDate: r,
                                              setNextReq: g,
                                            }),
                                          ],
                                        }),
                                        Object(T.jsx)(Se.a, {
                                          className: e.iconStatus,
                                          avatar: 'avatar',
                                          title: ''.concat(t.user.username),
                                          action: t.accepted ? 'ACCEPTED' : t.declined ? 'DECLINED' : 'PENDING',
                                        }),
                                      ],
                                    },
                                    t._id,
                                  )
                                : null;
                            }),
                          Object(T.jsx)(m.a, { className: e.typographyPast, children: 'PAST BOOKINGS:' }),
                          !!c.length &&
                            c.map(function (t) {
                              return new Date(t.start).getTime() < r.getTime()
                                ? Object(T.jsxs)(
                                    ye.a,
                                    {
                                      variant: 'outlined',
                                      className: e.bookingsCardItem,
                                      children: [
                                        Object(T.jsxs)(Ce.a, {
                                          className: e.bookingsCardContent,
                                          children: [
                                            Object(T.jsx)(m.a, {
                                              variant: 'h6',
                                              noWrap: !0,
                                              display: 'inline',
                                              children: new Date(t.start).toDateString(),
                                            }),
                                            Object(T.jsx)(Ne.a, { className: e.iconSettings }),
                                          ],
                                        }),
                                        Object(T.jsx)(Se.a, {
                                          className: e.iconStatus,
                                          avatar: 'avatar',
                                          title: ''.concat(t.user.username),
                                          action: t.accepted ? 'ACCEPTED' : t.declined ? 'DECLINED' : 'PENDING',
                                        }),
                                      ],
                                    },
                                    t._id,
                                  )
                                : null;
                            }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              Object(T.jsx)(h.a, {
                item: !0,
                xs: 7,
                className: e.bookingsCalendar,
                direction: 'column',
                container: !0,
                children: Object(T.jsx)(p.a, {
                  elevation: 2,
                  className: e.calendarContainer,
                  children: Object(T.jsx)(Te.a, {
                    utils: Ie.a,
                    children: c.length
                      ? Object(T.jsx)(Pe.a, {
                          autoOk: !0,
                          disableToolbar: !0,
                          orientation: 'landscape',
                          variant: 'static',
                          value: r,
                          disabled: !0,
                          renderDay: function (t, n, a, i) {
                            return (function (t, n, a, i) {
                              var o = t ? t.getTime() : null,
                                s = c
                                  .filter(function (e) {
                                    return e.accepted;
                                  })
                                  .map(function (e) {
                                    return new Date(e.start).getTime();
                                  });
                              return o ===
                                s.find(function (e) {
                                  return e === o && o >= r.getTime();
                                })
                                ? Object(T.jsx)('div', { className: e.customSelectedDay, children: i })
                                : i;
                            })(t, 0, 0, i);
                          },
                          onChange: function () {
                            return i(new Date());
                          },
                        })
                      : Object(T.jsx)(Pe.a, {
                          autoOk: !0,
                          disableToolbar: !0,
                          orientation: 'landscape',
                          variant: 'static',
                          value: r,
                          disabled: !0,
                          onChange: function () {
                            return i(new Date());
                          },
                        }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      n(360);
      var Fe = function () {
        return Object(T.jsx)(o.a, {
          theme: c,
          children: Object(T.jsx)(l.a, {
            children: Object(T.jsx)(H, {
              children: Object(T.jsx)(F, {
                children: Object(T.jsx)(te, {
                  children: Object(T.jsxs)(u.d, {
                    children: [
                      Object(T.jsx)(u.b, { exact: !0, path: '/login', component: _ }),
                      Object(T.jsx)(u.b, { exact: !0, path: '/signup', component: X }),
                      Object(T.jsx)(u.b, { exact: !0, path: '/dashboard', children: Object(T.jsx)(ve, {}) }),
                      Object(T.jsx)(u.b, { exact: !0, path: '/bookings', children: Object(T.jsx)(We, {}) }),
                      Object(T.jsx)(u.b, { path: '*', children: Object(T.jsx)(u.a, { to: '/login' }) }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        });
      };
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
      );
      i.a.render(Object(T.jsx)(Fe, {}), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[361, 1, 2]],
]);
//# sourceMappingURL=main.fbc276e8.chunk.js.map
